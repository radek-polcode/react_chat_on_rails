class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    chatroom = Chatroom.find(params[:id])
    stream_for chatroom
    ChatroomChannel.broadcast_to(
      chatroom,
      message: {
        body: current_user.name + " joined",
        user: {
          name: 'chatbot'
        },
        className: 'chatbot'
      }.to_json
    )
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
