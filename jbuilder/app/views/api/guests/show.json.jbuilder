# json.extract! @guest, :name, :age, :favorite_color
 json.partial! 'api/guests/guest', guest: @guest

json.gifts do
  @guest.gifts.each do |gift|
    json.partial! 'api/gifts/gift', gift: gift
  end

end