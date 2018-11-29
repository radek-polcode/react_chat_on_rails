# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on 'turbolinks:load', ->
  App.chatroom = App.cable.subscriptions.create({
    channel: 'ChatroomChannel'
    id: $('#messages').attr('data-chatroom-id')
  }, received: (data) ->
    $('#messages').append data.message
    return
  )
  return