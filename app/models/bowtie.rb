class Bowtie < ApplicationRecord
  validates :pattern, presence: true

  def as_json(options={})
    super(:except => [:wholesale_price, :created_at, :updated_at])
  end
end
