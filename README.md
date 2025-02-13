# Unhandled Exception in Node.js

This example demonstrates an unhandled exception in a Node.js server.  The server starts, but after a one second delay, it attempts to access a variable that doesn't exist, causing the process to crash without proper handling.  The solution shows how to prevent this using a try-catch block.

## Running the code

1.  Clone this repository.
2.  Run `node bug.js` to see the unhandled exception.
3.  Run `node bugSolution.js` to see the handled exception.