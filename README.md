# SkiddedHost

SkiddedHost is a free and unlimited file hosting service developed by User319183. The service is built with Node.js and Express, and it provides an easy-to-use interface for uploading and hosting files.

## Features

- Free and unlimited file hosting
- File upload via drag-and-drop or file selection
- Terms of Service agreement required before file upload
- IP and user-agent logging for uploaded files
- Blacklist for blocking specific IPs

## Live Version

You can access the live version of the application at [https://skiddedhost.replit.app/](https://skiddedhost.replit.app/)

## Local Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Create a `.env` file in the root directory and add your environment variables (e.g., `DISCORD_WEBHOOK_URL` and `PORT`).
5. Run `node index.js` to start the application.

## Dependencies

- [@replit/database](https://www.npmjs.com/package/@replit/database)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-basic-auth](https://www.npmjs.com/package/express-basic-auth)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [multer](https://www.npmjs.com/package/multer)
- [node-fetch](https://www.npmjs.com/package/node-fetch)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE)