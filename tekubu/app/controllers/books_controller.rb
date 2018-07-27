class BooksController < ApplicationController
  def index
    if params[:tag]
      # tagのハッシュがあった時
      # tagged_withでタグ「:tag」でタグごとにフィルター
      @books = Book.tagged_with(params[:tag])
    else
      @books = Book.all
      @tags = Book.all_tags
      @tagpost = Book.tags_on(:dictionary)
      # @bobby = Book.tagged_with(@tagpost.name)

      p "tagpost=========================================="
      # p @tagpost
      p "bobby=========================================="
      # p @bobby
      p "//bobby=========================================="
    end
  end

  def show
    @book = Book.find(params[:id])
    @tags = Book.all_tags
    prepare_meta_tags(
      title: @book.title,
      description: @book.title + "の紹介ページ。Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト「Tekubu」（テクブ）。プログラミングに関する知識を記録・共有するためのサービスQiitaに投稿している記事数をカウントしておすすめの本をご紹介します。",
      og: {
      title: @book.title + " | Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト｜Tekubu（テクブ）",
        description: @book.title + "の紹介ページ。Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト「Tekubu」（テクブ）。プログラミングに関する知識を記録・共有するためのサービスQiitaに投稿している記事数をカウントしておすすめの本をご紹介します。",
        image: @book.image
      },
      twitter: {
      title: @book.title + " | Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト｜Tekubu（テクブ）",
        description: @book.title + "の紹介ページ。Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト「Tekubu」（テクブ）。プログラミングに関する知識を記録・共有するためのサービスQiitaに投稿している記事数をカウントしておすすめの本をご紹介します。",
        image: @book.image
      }
      )
  end

  # 新規登録フォーム
  def new
    @book = Book.new(created_at: Time.current)
  end

  # 編集
  def edit
    @book = books.find(params[:id])
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to @book, notice: "記事を作成しました。"
    else
      render "new"
    end
  end

  def update
    @book = books.find(params[:id])
    if @book.save
      redirect_to @book, notice: "記事を更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @book = books.find(params[:id])
    @book.destroy
    redirect_to :books, notice: "記事を削除しました。"
  end

  def search
    if params[:keyword].present?
      #　デバックログ出力するために記述
      Amazon::Ecs.debug = true

      # Amazon::Ecs::Responceオブジェクトの取得
      books = Amazon::Ecs.item_search(
        params[:keyword],
        search_index:  'Books',
        dataType: 'script',
        response_group: 'ItemAttributes, Images',
        country:  'jp',
        power: "Not kindle"
      )

      # 本のタイトル,画像URL, 詳細ページURLの取得
      @books = []
      books.items.each do |item|
        book = Book.new(
          item.get('ItemAttributes/Title'),
          item.get('LargeImage/URL'),
          item.get('DetailPageURL'),
        )
        @books << book
      end
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :event_id , :url, :url_hash, :content, :post_created, :post_updated, :created_at,:dictionary_list)
  end
end