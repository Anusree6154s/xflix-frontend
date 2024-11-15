<div align="center">
    <img src="https://crio-directus-assets.s3.ap-south-1.amazonaws.com/939aec42-d73b-4007-8369-c420055f4e33.png" width="100"/>
    <h1 id="title">XFlix - Video Sharing Platform</h1>
    <p><strong>Full-stack implementation of XFlix - A video sharing platform</strong></p>
    <p>
      <a href="https://xflix-frontend-hazel.vercel.app/">XFlix Website</a> •
      <a href="https://github.com/Anusree6154s/xflix-backend">XFlix Backend Repo</a> •
      <a href="https://documenter.getpostman.com/view/33572999/2sAY55ZxeS">API Documentation</a>
    </p>
    <img src="https://github.com/user-attachments/assets/4d518159-9fb8-479f-8f46-33aa9b1258d2" width="700"/>
</div>

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Technical Architecture](#technical-architecture)
4. [Features in Detail](#features-in-detail)
5. [Potential Improvements](#potential-improvements)

## Project Overview

<p id="description">
XFlix is a video sharing platform that allows users to view and upload videos, as well as play them directly in the browser. It uses MongoDB, Express.js, React.js, and Node.js to create a modern full-stack application.
</p>

This repository contains the frontend development files for XFlix. This README provides an overview of both the frontend and backend aspects of the project. The backend repository can be found [here](https://github.com/Anusree6154s/xflix-backend).

### Tech Stack:

- #### Frontend
  - **React.js**: For building the user interface.
  - **Material UI (MUI)**: For pre-styled React components
  - **Tailwind CSS**: For Simplified styling
- #### Backend
  - **Node.js**: For server-side development.
  - **Express.js**: To create RESTful APIs.
  - **MongoDB**: For data storage and management.
  - **Mongoose**: For object data modeling (ODM) and schema validation in MongoDB.

### Features Overview:

- Users can search for videos by title and genre.
- Filter videos by genres and content rating.
- Add new videos via URL (e.g., YouTube links).
- Watch videos directly on the platform and interact with it.

## Setup Instructions

### Frontend

```bash
git clone https://github.com/username/xflix-frontend.git # Clone the repo
cd xflix-frontend
cd frontend
npm install # Install dependencies
npm start # Run the app locally
```

### Backend

```bash
git clone https://github.com/username/xflix-backend.git # Clone the repo
cd xflix-backend
npm install # Install dependencies
npm start # Start the backend server
```

## Technical Architecture

- #### Frontend

  - **Frontend Library**: React.js for developing a component-based user interface.
  - **State Management**: React hooks (`useState`, `useEffect`) and Context API for managing state and sharing data across components.
  - **Routing**: React Router for dynamic navigation between video pages.
  - **Styling**: Material UI for a modern and consistent design, and Tailwind CSS for utility-first styling and rapid UI development.
  - **Hosting**: Vercel for client-side assets.

- #### Backend

  - **REST API**: Built using Node.js and Express.js to handle server-side logic and communication.
  - **Database**: MongoDB for data storage and management.
  - **ORM**: Mongoose for schema validation and interaction with MongoDB.
  - **Hosting**: Render for backend deployment.

## Features in Detail

- #### Frontend

  1. **Video Browsing**:

     - Displayed a grid of videos with thumbnails, titles, upload dates, and view counts.
     - Integrated with the backend API to dynamically fetch and render video content.

    <div align="center">  
      <img src="https://github.com/user-attachments/assets/f10a0ee3-5415-463f-bc2b-8792ec555b66" width="600"/>  
      <h5>Video Browsing</h5>  
    </div>

  2. **Video Playback**:

     - Enabled video playback with a custom player interface.
     - Displayed detailed metadata, including title, description, upload date, and view count, alongside the player.
     - Implemented features to like or dislike videos for user interaction.

    <div align="center">  
      <img src="https://github.com/user-attachments/assets/39c16315-a533-4dad-bede-1d314eaf007e" width="600"/>  
      <h5>Video Playback</h5>  
    </div>

  3. **Video Upload**:

     - Developed a modal interface for uploading videos.
     - Connected with the backend API to store video details in MongoDB seamlessly.
     - Provided user notifications for successful uploads and error handling to improve UX.

    <div align="center">  
      <img src="https://github.com/user-attachments/assets/670e08e4-c309-4b2e-8f25-8848b256a9c6" width="600"/>  
      <h5>Video Upload</h5>  
    </div>

  4. **Search, Sort, and Filtering**:

     - Integrated search functionality with debounced input to reduce API calls and enhance responsiveness.
     - Enabled filtering based on genre and age group to refine results.
     - Implemented sorting by release date and view count for better content organization.

    <div align="center">  
      <img src="https://github.com/user-attachments/assets/4d7cca3d-ae3e-49eb-bd50-7c943b08fce2" width="500"/>  
      <img src="https://github.com/user-attachments/assets/abd8909b-b077-4466-9cb8-4a163a6a0548" width="500"/>  
      <h5>Search, Sort, and Filter</h5>  
    </div>

- #### Backend

  - **GET /v1/videos**: Retrieve all videos in the database.
  - **POST /v1/videos**: Add a new video.
  - **GET /v1/videos/:id**: Retrieve information about a specific video by its ID.
  - **PATCH /v1/videos/:id/views**: Increment the view count for a video.
  - **PATCH /v1/videos/:id/votes**: Update upvotes or downvotes.

## Potential Improvements

- **User Comments**: Add a comment section for each video with real-time updates.
- **Playlists**: Enable users to create and manage playlists.
- **Content Scheduling**: Allow uploaders to schedule their videos for future publication.

<p align="center"> 
  <img width="0" id="image" alt="xflix-frontend-img" src="https://github.com/user-attachments/assets/07637b53-e1b4-4a6e-86f4-a837ffa589bf">
</p>
