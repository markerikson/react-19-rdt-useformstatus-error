import { useOptimistic, useRef, useState } from "react";

const MessageForm = ({ addOptimisticMessage, sendMessage }) => {
  // Create a reference to the form
  const formRef = useRef();

  // This function is called when the form is submitted
  const formAction = async formData => {
    addOptimisticMessage(formData.get("message"));

    // Clear the form
    formRef.current.reset();

    await sendMessage(formData);
  };

  return (
    <form action={formAction} ref={formRef} className="mb-5 flex items-center">
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Hello!"
        className="mr-2 rounded border border-gray-300 py-1 px-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="focus:shadow-outline rounded bg-blue-500 py-1 px-4 font-semibold text-white hover:bg-blue-600 focus:outline-none"
      >
        Send
      </button>
    </form>
  );
};

const Thread = ({ messages, sendMessage }) => {
  // The useOptimistic hook is used to add an optimistic message to the list of messages
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      <MessageForm addOptimisticMessage={addOptimisticMessage} sendMessage={sendMessage} />
      {optimisticMessages.map((message, index) => (
        <div key={index} className="flex items-center">
          <span>{message.text}</span>
          {message.sending && <small className="ml-1 text-gray-500">(Sending...)</small>}
          {!message.sending && <span>&nbsp; (sent)</span>}
        </div>
      ))}
    </div>
  );
};

const deliverMessage = async message => {
  // Simulate a delay
  await new Promise(res => setTimeout(res, 1000));
  return message;
};

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));

    setMessages(messages => [...messages, { text: sentMessage }]);
  }

  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export { MessageBox as UseOptimisticExample };
