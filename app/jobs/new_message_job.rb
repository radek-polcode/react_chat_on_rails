class NewMessageJob < ApplicationJob
  def perform(message_id, chatroom_id)
    chatroom = Chatroom.find_by(id: chatroom_id)
    message = Message.find_by(id: message_id)

    ChatroomChannel.broadcast_to(
            chatroom,
            message: MessagesController.render(
              partial: 'messages/message.json',
              locals: { message: message }
            )
          )
  end
end
