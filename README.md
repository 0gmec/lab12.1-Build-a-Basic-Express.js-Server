# Reflection Questions
What is the difference between res.send() and res.sendFile()? When would you use one over the other?
- res.send() is sending a text response, sending a response back. res.sendFile() is sending a file through a path.

Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
- The path module is necessary because you're using that for an absolute path versus a relative one could lead to broken routes or files not being found.

How would you add a third page (e.g., a menu page) to this server? What steps would you take?
- You would add another html in the public folder, adn then in the server.js add another GET handler. Run and test the node server.

  
