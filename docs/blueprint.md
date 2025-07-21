# **App Name**: Pong Function

## Core Features:

- HTTP Endpoint: Receive a JSON request via HTTP POST.
- JSON Parsing: Parse the incoming JSON to extract the 'text' field.
- Ping-Pong Logic: If the value of 'text' is 'ping', return a JSON response with the field 'reply' set to 'pong'.
- Error Handling: If the value of 'text' is anything other than 'ping', return a JSON response with the field 'reply' set to 'Command not recognized'.
- Deployment: Deploy the application as a Google Cloud Function for serverless execution.

## Style Guidelines:

- Primary color: Light blue (#ADD8E6), suggestive of clarity and simplicity, ideal for an application that gives straightforward answers.
- Background color: Very light blue (#F0F8FF), nearly white, to keep the interface clean and reduce distractions.
- Accent color: Pale cyan (#AFEEEE) to provide contrast to the primary color without being visually noisy.
- Font: 'Inter', a sans-serif font for clean and modern readability. Use for all text, as the application contains very little.