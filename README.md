# ELEVATE-SDE-Task-3 — CredVault Backend

Backend REST API using **Node.js, Express.js and MongoDB (Mongoose)**. Admin routes use JWT bearer-token authentication.

## Setup
1. Install Node.js 18+ and run MongoDB locally, or create a MongoDB Atlas database.
2. Copy `.env.example` to `.env` and update `MONGODB_URI` and `JWT_SECRET`.
3. Run `npm install`.
4. Run `npm run dev` (or `npm start`).

API base URL: `http://localhost:5000`

## Admin demo credentials
Username `admin`, password `admin`. Change these in `.env` before deployment.

## Endpoints
- `POST /api/applications`
- `GET /api/applications/track/:applicationId`
- `GET /api/certificates/verify/:certificateId`
- `POST /api/admin/login`
- `GET /api/admin/applications` (Bearer token)
- `PATCH /api/admin/applications/:applicationId/approve` (Bearer token)
- `PATCH /api/admin/applications/:applicationId/reject` (Bearer token)
- `GET /api/admin/certificates` (Bearer token)
- `PATCH /api/admin/certificates/:certificateId/revoke` (Bearer token)

The revoke endpoint uses PATCH because it changes a resource's status. All data is stored in MongoDB.
