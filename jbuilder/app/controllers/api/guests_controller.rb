class Api::GuestsController < ApplicationController
  def index
    # @guests = Guest.all
    @guests = Guest.includes(:gifts)
    @guests.each do |guest|
      guest.gifts.each do |gift|
        gift.title
        gift.description
      end
    end
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
  #  @guests = Guest.includes(:gifts)
  #   @guests.each do |guest|
  #     guest.gifts.each do |gift|
  #       gi ft.title
  #       gift.description
  #     end
  #   end
  #   @guest = @guests.where(id: params[:id])
    render :show
  end
end
