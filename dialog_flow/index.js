'use strict';

import dialogflow from "@google-cloud/dialogflow"
import {v4 as uuid} from 'uuid';

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

export default async function dialog(message, projectId = process.env.project_id)
{
    // A unique identifier for the given session
    const sessionId = uuid();

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();

    const sessionPath = sessionClient.projectAgentSessionPath(projectId,sessionId);

    // The text query request.
    const request = {
    session: sessionPath,
    queryInput: {
        text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: 'en-US',
        },
    },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    // console.log('Detected intent');
    const result = responses[0].queryResult;
    // console.log(`  Query: ${result.queryText}`);
    // console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
    // console.log(`  Intent: ${result.intent.displayName}`);
    } else {
    // console.log('  No intent matched.');
    }
    return result;
}