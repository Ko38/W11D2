json.extract! @party, :name, :location

json.guests do 
  # @party.guests.each do |guest|
  #   json.extract! guest, :name, :age, :favorite_color
  # end
  # @party.guests.each do |guest|
  #   json.name guest.name
  #   json.age guest.age
  #   json.favorite_color guest.favorite_color
  # end
  json.array! @party.guests, :name, :age, :favorite_color, :gifts
end
