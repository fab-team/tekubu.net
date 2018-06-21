class EventController < ApplicationController

  # 新規登録フォーム
  def new
    @event = Event.new(created_at: Time.current)
    # @all_tag_list = ActsAsTaggableOn::Tag.for_context(:sex_list).pluck(:name)
    # @all_tag_list = ActsAsTaggableOn::Tag.for_context(:sex_list).pluck(:name)
    # @all_tag_list = ActsAsTaggableOn::Tag.for_context(:sex_list)
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
    params.require(:event).permit(:title, :url, :content, :post_created, :post_updated, :url_hash, :created_at)
  end

end