// 获取DOM元素
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.getElementById('chat-history');

// 发送消息
function sendMessage() {
	// 获取输入框内容
	const message = messageInput.value.trim();
	if (message === '') {
		return;
	}

	// 创建消息元素
	const messageElement = document.createElement('div');
	messageElement.classList.add('message');
	messageElement.innerHTML = `
		<div class="message-time">${getTime()}</div>
		<div class="message-content">${message}</div>
	`;

	// 添加到聊天记录
	chatHistory.appendChild(messageElement);
	chatHistory.scrollTop = chatHistory.scrollHeight;

	// 清空输入框
	messageInput.value = '';
}

// 获取当前时间
function getTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}

// 绑定事件
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		sendMessage();
	}
});
