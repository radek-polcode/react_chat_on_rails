class Message < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user

  after_commit { NewMessageJob.perform_later(id, chatroom.id)}
end
