class BooksController < ApplicationController
  def index
    @books = Book.all
    # flash[:notice] = "ログイン済ユーザーのみ記事の詳細を確認できます" unless user_signed_in?
  end

  def show
    @book = Book.find(params[:id])
    # @entries = @user.entries

    amazon = Amazon::Ecs.item_search(
      # キーワードを指定
      @book.asin,
      :response_group => 'Large',
      :search_index => 'All',
      :country => 'jp'
    )

    amazon.is_valid_request?
    amazon.has_error?
    amazon.error
    amazon.total_pages
    amazon.total_results
    amazon.item_page

    amazon.items.each do |item|
      item_attributes = item.get_element('ItemAttributes')
      item_attrireviews = item.get_element('EditorialReviews')

      item.get('ASIN')

      # タイトル
      $title = item.get('ItemAttributes/Title')

      # 発売日
      $releaseDate = item.get('ItemAttributes/PublicationDate')

      # 著者
      $author = item.get('ItemAttributes/Author')

      # アマゾン商品URL
      $amazonUrl = item.get('DetailPageURL')

      # 商品内容
      $amazonText = item.get('EditorialReviews/EditorialReview/Content')

      # 言語
      $languages = item.get('ItemAttributes/Languages/Language/Name')

      # 画像
      # LargeImageの下の階層を取得する場合 /LargeImage/URL
      $images = item.get('LargeImage/URL')
      # puts item.get_element("Author")

      sleep(1)
    end
    # puts amazon.marshal_dump
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