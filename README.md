# Vocabulary Study Application (Vocab App)

## Project Purpose
This project is designed to help users learn English words and see their Turkish translations. Users can click on word cards to reveal the Turkish translation and press the "Next" button to move to a randomly selected next word.

## Features
- **Word Cards**: Displays English words and their Turkish translations.
- **Start Page**: A start page to begin the application.
- **Random Word Selection**: Shows a random word each time.
- **Firebase Integration**: Words are fetched from Firebase Firestore.
- **Transition Animations**: Smooth transitions between word cards.

## Technologies Used
- **React**: For building the user interface.
- **Firebase**: For database and data management.
- **Tailwind CSS**: For styling and design.
- **Jest**: For testing.
- **Web Vitals**: For performance measurements.

## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/username/word-study-application.git
    cd word-study-application
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

3. Configure Firebase:
    - Create a `.env` file in the `src` directory and add your Firebase configuration:
      ```env
      REACT_APP_FIREBASE_API_KEY=your_api_key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_FIREBASE_APP_ID=your_app_id
      REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
      ```

4. Start the application:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000`.
