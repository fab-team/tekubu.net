class BooksController < ApplicationController
  def index
    @books = Book.all
    # flash[:notice] = "ログイン済ユーザーのみ記事の詳細を確認できます" unless user_signed_in?
  end

  def show
    @book = Book.find(params[:id])
    prepare_meta_tags(title: @book.title,description: @book.title + "の紹介ページ。Qiitaの投稿記事に紹介されている本の情報をまとめて紹介するサイト「Tekubu」（テクブ）。プログラミングに関する知識を記録・共有するためのサービスQiitaに投稿している記事数をカウントしておすすめの本をご紹介します。" )
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
end