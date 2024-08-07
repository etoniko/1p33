document.querySelector('html').innerHTML = `<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>etoniko</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body, html {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .background {
            background-image: url("https://cojo.ru/wp-content/uploads/2024/01/beskonechnyi-fon-2.gif"); /* Замените 'your-image.jpg' на путь к вашему изображению */
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .content {
            backdrop-filter: blur(20px);
            padding: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            color: white;
            flex-direction: column;
            text-align: center;
        }
        h1 {
            font-size: 2.5em;
            margin: 10px 0;
        }
        p {
            font-size: 1.2em;
            margin: 10px 0;
        }
        .avatar {
            border-radius: 5%;
            width: 150px;
            height: 190px;
            box-shadow: 0 0 0 2px #fff;
            margin-bottom: 20px;
        }
        .social-links a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
            font-size: 1.5em;
        }
        .social-links a .fab {
            margin-right: 5px;
        }
        @media (min-width: 768px) {
            .content {
                flex-direction: row;
                text-align: left;
            }
            .avatar {
                margin-right: 20px;
                margin-bottom: 0;
            }
            h1, p {
                margin: 0;
            }
        }
    </style>
</head>
<body>
    <div class="background">
        <div class="content">
            <img src="https://i.imgur.com/jnFK1Dq.jpg" alt="Avatar" class="avatar">
            <div>
                <h1>@Niko</h1>
                <p>Hi, I am a Middle-developer of RU server games such as MineCraft, GTA, Rust and Roblox. My job is to develop and optimize the backend of games</p>
                <div class="social-links">
                    <a href="https://vk.com/gruzinsski" target="_blank"><i class="fab fa-vk"></i></a>
                    <a href="https://instagram.com/darasseliaa" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://t.me/gorech" target="_blank"><i class="fab fa-telegram"></i></a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
