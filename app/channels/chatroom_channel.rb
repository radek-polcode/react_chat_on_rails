class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    chatrooom = Chatroom.find(params[:id])
    stream_for chatrooom
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
