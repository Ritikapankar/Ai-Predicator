 const emojis = ['🍌', '🦄', '🌈', '🍕', '🎸', '🦖', '🚀', '🌮', '🎩', '🦔'];
        
        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(emoji);
        }

const predictions = [
    "Yes, definitely.",
    "No, absolutely not.",
    "Maybe. Depends on your Wi-Fi.",
    "Ask again after coffee ☕",
    "The AI refuses to answer.",
    "Results unclear. Try restarting life."
];

const resultEmojis = ['🎭', '🎪', '🎨', '🎯', '🎲', '🎰', '🎺', '🎸', '🎮', '🎳', '🎬', '🎤'];


        function predict() {
            const input = document.getElementById('question').value;
            
            if (!input.trim()) {
                alert('🍌 Please feed me a question first! 🍌');
                return;
            }

            document.getElementById('result').style.display = 'none';
            document.getElementById('loading').style.display = 'block';

            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                
                const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
                const randomEmoji = resultEmojis[Math.floor(Math.random() * resultEmojis.length)];
                const confidence = Math.floor(Math.random() * 45) + 101;
                
                document.getElementById('emoji').textContent = randomEmoji;
                document.getElementById('prediction').textContent = randomPrediction;
                document.getElementById('confidence').textContent = 
                    `⚡ Confidence Level: ${confidence}% (Yes, over 100%. We don't do limits here.)`;
                
                document.getElementById('result').style.display = 'block';
            }, 2000);
        }

        document.getElementById('question').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                predict();
            }
            });