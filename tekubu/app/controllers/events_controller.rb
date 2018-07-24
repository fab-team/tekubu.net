class EventsController < ApplicationController

  # 新規登録フォーム
  def index
    if params[:tag]
      # tagのハッシュがあった時
      # tagged_withでタグ「:tag」でタグごとにフィルター
      @events = Event.tagged_with(params[:tag])
    else
      @events = Event.all
      @tags = Event.all_tags
      @tagpost = Event.tags_on(:dictionary)
      # @bobby = Event.tagged_with(@tagpost.name)

      p "tagpost=========================================="
      # p @tagpost
      p "bobby=========================================="
      # p @bobby
      p "//bobby=========================================="
    end
  end

  # 記事の詳細
  def show
    @event = Event.find(params[:id])
  end

  # 新規登録フォーム
  def new
    @event = Event.new(created_at: Time.current)
  end

  # 編集
  def edit
    @event = events.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      redirect_to @event, notice: "記事を作成しました。"
    else
      render "new"
    end
  end

  def update
    @event = entries.find(params[:id])
    if @event.save
      redirect_to @event, notice: "記事を更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @event = entries.find(params[:id])
    @event.destroy
    redirect_to :events, notice: "記事を削除しました。"
  end

  private
  def event_params
    params.require(:event).permit(:title, :book_id , :url, :url_hash, :content, :post_created, :post_updated, :created_at,:dictionary_list)
  end

end
