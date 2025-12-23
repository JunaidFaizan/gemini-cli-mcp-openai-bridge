PS C:\Users\Md Junaid Faizan\Desktop\personal-projects\atsace-ui> gemini-cli-bridge --mode=edit --port=8765 --debug
2025-12-12T06:52:57.359Z [BRIDGE-SERVER] [INFO] Starting Gemini CLI Bridge (MCP + OPENAI)...
2025-12-12T06:52:57.361Z [BRIDGE-SERVER] [INFO] Pure OpenAI bridge mode enabled. GEMINI.md will be ignored. Client system prompts will be used.
--- Security Mode Initialized ---
Mode: Edit
✓ All built-in tools are enabled, except 'run_shell_command'.
⚠ Model has WRITE PERMISSIONS to files within: C:\Users\Md Junaid Faizan\Desktop\personal-projects\atsace-ui
✗ MCP proxy tools are disabled in this mode.
---------------------------------
Flushing log events to Clearcut.
2025-12-12T06:52:57.402Z [BRIDGE-SERVER] [INFO] Attempting authentication using "oauth-personal" method (auto-detected from ~/.gemini/oauth_creds.json)...
Loaded cached credentials.
2025-12-12T06:52:59.175Z [BRIDGE-SERVER] [INFO] ✅ Authentication successful!
2025-12-12T06:52:59.175Z [BRIDGE-SERVER] [DEBUG] Using authentication method: oauth-personal
2025-12-12T06:52:59.175Z [BRIDGE-SERVER] [DEBUG] Using model for tools: gemini-2.5-flash
2025-12-12T06:52:59.175Z [BRIDGE-SERVER] [INFO] Redirect resolution mode: DISABLED
2025-12-12T06:52:59.175Z [BRIDGE-SERVER] [INFO] --- Available Tools ---
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - replace: Replaces text within a file. By default, replaces a single occurrence, but can replace multiple occurrences when `expected_replacements` is specified. This tool requires providing significant context around the change to ensure precise targeting. Always use the read_file tool to examine the file's current content before attempting a text replacement.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - glob: Efficiently finds files matching specific glob patterns (e.g., `src/**/*.ts`, `**/*.md`), returning absolute paths sorted by modification time (newest first). Ideal for quickly locating files based on their name or path structure, especially in large codebases.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - google_web_search: Performs a web search using Google Search (via the Gemini API) and returns the results. This tool is useful for finding information on the internet based on a query.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - read_file: Reads and returns the content of a specified file from the local filesystem. Handles text, images (PNG, JPG, GIF, WEBP, SVG, BMP), and PDF files. For text files, it can read specific line ranges.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - list_directory: Lists the names of files and subdirectories directly within a specified directory path. Can optionally ignore entries matching provided glob patterns.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - read_many_files: Reads content from multiple files specified by paths or glob patterns within a configured target directory. For text files, it concatenates their content into a single string. It is primarily designed for text-based files. However, it can also process image (e.g., .png, .jpg) and PDF (.pdf) files if their file names or extensions are explicitly included in the 'paths' argument. For these explicitly requested non-text files, their data is read and included in a format suitable for model consumption (e.g., base64 encoded).
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - save_memory: 
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - search_file_content: Searches for a regular expression pattern within the content of files in a specified directory (or current working directory). Can filter files by a glob pattern. Returns the lines containing matches, along with their file paths and line numbers.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - web_fetch: Processes content from URL(s), including local and private network addresses (e.g., localhost), embedded in a prompt. Include up to 20 URLs and instructions (e.g., summarize, extract specific data) directly in the 'prompt' parameter.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] - write_file: Writes content to a specified file in the local filesystem.
2025-12-12T06:52:59.176Z [BRIDGE-SERVER] [INFO] -----------------------
2025-12-12T06:52:59.181Z [BRIDGE-SERVER] [INFO] Server running {
  port: 8765,
  host: '127.0.0.1',
  mcpUrl: 'http://127.0.0.1:8765/mcp',
  openAIUrl: 'http://127.0.0.1:8765/v1'
}
2025-12-12T06:54:11.973Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: 'a5aa28f4-4129-43a2-9b17-640d478fa76d',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:11.973Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: 'a5aa28f4-4129-43a2-9b17-640d478fa76d',
  body: {
    model: 'gemini-2.5-flash',
    messages: [ [Object], [Object] ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:11.975Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:11.975Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 0,
  lastMessage: {
    role: 'user',
    parts: [ [Object], [Object], [Object], [Object], [Object] ]
  }
}
Flushing log events to Clearcut.
2025-12-12T06:54:14.568Z [BRIDGE-SERVER] [DEBUG] Got stream from Gemini.
[Stream Transformer] Received chunk: tool_code {"name":"Grep","args":{"pattern":"hero section"}}
2025-12-12T06:54:14.576Z [BRIDGE-SERVER] [INFO] OpenAI bridge request finished {
  requestId: 'a5aa28f4-4129-43a2-9b17-640d478fa76d',
  status: 'success',
  durationMs: 2603
}
2025-12-12T06:54:14.763Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: 'd6e6e6f2-5b4d-49ec-b37e-c212ed19017e',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:14.764Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: 'd6e6e6f2-5b4d-49ec-b37e-c212ed19017e',
  body: {
    model: 'gemini-2.5-flash',
    messages: [ [Object], [Object], [Object], [Object] ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:14.764Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:14.765Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 2,
  lastMessage: { role: 'user', parts: [ [Object] ] }
}
2025-12-12T06:54:17.494Z [BRIDGE-SERVER] [DEBUG] Got stream from Gemini.
[Stream Transformer] Received chunk: tool_code {"name":"Grep","args":{"glob_pattern":"**/*.tsx","pattern":"hero|neural network"}}
2025-12-12T06:54:17.501Z [BRIDGE-SERVER] [INFO] OpenAI bridge request finished {
  requestId: 'd6e6e6f2-5b4d-49ec-b37e-c212ed19017e',
  status: 'success',
  durationMs: 2738
}
2025-12-12T06:54:17.662Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: '7c007230-4138-489c-ae42-d6cc8fb08fd4',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:17.662Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: '7c007230-4138-489c-ae42-d6cc8fb08fd4',
  body: {
    model: 'gemini-2.5-flash',
    messages: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:17.663Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:17.663Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 4,
  lastMessage: { role: 'user', parts: [ [Object] ] }
}
2025-12-12T06:54:20.140Z [BRIDGE-SERVER] [DEBUG] Got stream from Gemini.
[Stream Transformer] Received chunk: text "I need to implement a neural network background on the dashboard, mirroring the homepage hero section. I've located relevant files and will now analyze `src/app/page.tsx` to understand the existing implementation."
[Stream Transformer] Received chunk: tool_code {"name":"TodoWrite","args":{"todos":[{"task":"Analyze the homepage hero section in `src/app/page.tsx` to understand the neural network background implementation.","status":"in_progress"},{"task":"Identify relevant component(s) or styling for the neural network background.","status":"pending"},{"task":"Analyze the dashboard background in `src/app/(dashboard)/layout.tsx` to understand how to integrate the neural network background.","status":"pending"},{"status":"pending","task":"Implement the neural network background in the dashboard."}]}}
[Stream Transformer] Received chunk: tool_code {"name":"Read","args":{"file_path":"src/app/page.tsx"}}
2025-12-12T06:54:20.891Z [BRIDGE-SERVER] [INFO] OpenAI bridge request finished {
  requestId: '7c007230-4138-489c-ae42-d6cc8fb08fd4',
  status: 'success',
  durationMs: 3229
}
2025-12-12T06:54:20.905Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: '6e3cf1d7-b2b0-42fd-870d-67c3bef04908',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:20.905Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: '6e3cf1d7-b2b0-42fd-870d-67c3bef04908',
  body: {
    model: 'gemini-2.5-flash',
    messages: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:20.906Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:20.906Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 7,
  lastMessage: { role: 'user', parts: [ [Object] ] }
}
2025-12-12T06:54:22.159Z [BRIDGE-SERVER] [ERROR] OpenAI bridge request failed {
  message: '[{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']',
  stack: 'Error: [{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']\n' +
    '    at Gaxios._request (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\node_modules\\gaxios\\build\\src\\gaxios.js:142:23)\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n' +
    '    at async OAuth2Client.requestAsync (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\build\\src\\auth\\oauth2client.js:429:18)\n' +
    '    at async CodeAssistServer.requestStreamingPost (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:82:21)\n' +  
    '    at async CodeAssistServer.generateContentStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:24:23)\n' + 
    '    at async retryWithBackoff (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/utils/retry.js:62:20)\n' +
    '    at async GeminiChat.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/core/geminiChat.js:303:36)\n' +
    '    at async GeminiApiClient.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/gemini-client.js:262:30)\n' +     
    '    at async file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/bridge/openai.js:27:34'
} { requestId: '6e3cf1d7-b2b0-42fd-870d-67c3bef04908', durationMs: 1254 }
2025-12-12T06:54:23.950Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: 'f4f9a403-e1dd-4574-9388-18c56a8c323f',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:23.950Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: 'f4f9a403-e1dd-4574-9388-18c56a8c323f',
  body: {
    model: 'gemini-2.5-flash',
    messages: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:23.951Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:23.951Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 7,
  lastMessage: { role: 'user', parts: [ [Object] ] }
}
2025-12-12T06:54:25.262Z [BRIDGE-SERVER] [ERROR] OpenAI bridge request failed {
  message: '[{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']',
  stack: 'Error: [{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']\n' +
    '    at Gaxios._request (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\node_modules\\gaxios\\build\\src\\gaxios.js:142:23)\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n' +
    '    at async OAuth2Client.requestAsync (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\build\\src\\auth\\oauth2client.js:429:18)\n' +
    '    at async CodeAssistServer.requestStreamingPost (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:82:21)\n' +  
    '    at async CodeAssistServer.generateContentStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:24:23)\n' + 
    '    at async retryWithBackoff (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/utils/retry.js:62:20)\n' +
    '    at async GeminiChat.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/core/geminiChat.js:303:36)\n' +
    '    at async GeminiApiClient.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/gemini-client.js:262:30)\n' +     
    '    at async file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/bridge/openai.js:27:34'
} { requestId: 'f4f9a403-e1dd-4574-9388-18c56a8c323f', durationMs: 1312 }
2025-12-12T06:54:27.584Z [BRIDGE-SERVER] [INFO] OpenAI bridge request received {
  requestId: '3f162b4f-8138-4339-8c44-c78f8af56418',
  model: 'gemini-2.5-flash',
  stream: true
}
2025-12-12T06:54:27.584Z [BRIDGE-SERVER] [DEBUG] Request body: {
  requestId: '3f162b4f-8138-4339-8c44-c78f8af56418',
  body: {
    model: 'gemini-2.5-flash',
    messages: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    tools: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stream: true,
    max_tokens: 32000,
    temperature: 1
  }
}
2025-12-12T06:54:27.585Z [BRIDGE-SERVER] [INFO] Calling Gemini API { model: 'gemini-2.5-flash' }
2025-12-12T06:54:27.585Z [BRIDGE-SERVER] [DEBUG] Sending request to Gemini {
  historyLength: 7,
  lastMessage: { role: 'user', parts: [ [Object] ] }
}
2025-12-12T06:54:28.654Z [BRIDGE-SERVER] [ERROR] OpenAI bridge request failed {
  message: '[{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']',
  stack: 'Error: [{\n' +
    '  "error": {\n' +
    '    "code": 400,\n' +
    '    "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '    "errors": [\n' +
    '      {\n' +
    '        "message": "Please ensure that the number of function response parts is equal to the number of function call parts of the function call turn.",\n' +
    '        "domain": "global",\n' +
    '        "reason": "badRequest"\n' +
    '      }\n' +
    '    ],\n' +
    '    "status": "INVALID_ARGUMENT"\n' +
    '  }\n' +
    '}\n' +
    ']\n' +
    '    at Gaxios._request (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\node_modules\\gaxios\\build\\src\\gaxios.js:142:23)\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n' +
    '    at async OAuth2Client.requestAsync (C:\\Users\\Md Junaid Faizan\\Desktop\\personal-projects\\gemini-cli-mcp-openai-bridge\\gemini-cli\\node_modules\\google-auth-library\\build\\src\\auth\\oauth2client.js:429:18)\n' +
    '    at async CodeAssistServer.requestStreamingPost (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:82:21)\n' +  
    '    at async CodeAssistServer.generateContentStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/code_assist/server.js:24:23)\n' + 
    '    at async retryWithBackoff (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/utils/retry.js:62:20)\n' +
    '    at async GeminiChat.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/core/dist/src/core/geminiChat.js:303:36)\n' +
    '    at async GeminiApiClient.sendMessageStream (file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/gemini-client.js:262:30)\n' +     
    '    at async file:///C:/Users/Md%20Junaid%20Faizan/Desktop/personal-projects/gemini-cli-mcp-openai-bridge/gemini-cli/packages/bridge-server/dist/bridge/openai.js:27:34'
} { requestId: '3f162b4f-8138-4339-8c44-c78f8af56418', durationMs: 1070 }
