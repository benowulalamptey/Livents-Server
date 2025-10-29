Livents v13.1 - Unsigned Test Bundle
Generated: 2025-10-29T10:54:50.641605 UTC
Latency: 2-5 seconds (interactive)

Overview
--------
Livents is a two-app system: Producer (desktop/mobile) and Viewer (mobile/web/desktop).
This bundle contains server code (Render-ready), Android and Electron app stubs (unsigned), and deployment instructions.

Folder structure
----------------
/server        -> Token + control backend (Node.js)
/app-android   -> Android project (unsigned)
/app-desktop   -> Electron desktop app (unsigned)
.env.example   -> Environment variable placeholders

Environment variables
---------------------
LIVEKIT_API_KEY, LIVEKIT_API_SECRET, LIVEKIT_URL, MUX_TOKEN

Step-by-step Render deployment
------------------------------
1. Create a new private GitHub repo and push the /server folder contents to it, or upload the /server folder directly when creating a Render Web Service.
2. In Render Dashboard: New -> Web Service -> Connect GitHub (or drag & drop).
3. For Build Command use: npm install
   For Start Command use: npm start
   Runtime: Node 18+
4. Add Environment Variables in the Render service settings (do NOT commit .env file to public repos):
   - Copy values from .env.example to Render environment variables.
5. Deploy and wait for "Build Successful" and "Your Service is Live".
6. Use the Render service URL as TOKEN_SERVER_URL in the app .env files.
7. Test by creating an event (Producer) and playing it (Viewer).

Testing
-------
- Use Mux dashboard to confirm playback IDs when streams are created.
- For Livents (LiveKit): ensure LiveKit keys are working and that egress to Mux is started successfully.

Notes
-----
- Builds are unsigned for testing. For production, sign Android (keystore) and Electron installers (code signing certificates).
- Cloudflare is optional and not required for pilot; Mux provides CDN playback.
- Support: support@livents.app

