# IWPDeepFakeSite

# How to publish 
pscp -r C:\Users\flori\Documents\GitHub\IWPDeepFakeSite\* InfoDeepFake@webprojects3.fh-hagenberg.at:/web

To move files via SSH on a Macbook, you can use the `scp` (secure copy) command. Here's how to do it:

1. Open a Terminal window on your Macbook.
2. Type the following command and press Enter:
```
scp /path/to/local/file username@remote:/path/to/remote/directory
```
Replace `/path/to/local/file` with the path to the file you want to transfer, `username` with your remote username, `remote` with the IP address or domain name of the remote server, and `/path/to/remote/directory` with the path to the directory on the remote server where you want to transfer the file.

3. If this is your first time connecting to the remote server, you may be prompted to accept the server's key fingerprint. Type "yes" and press Enter to continue.

4. You'll be prompted to enter the password for the remote user. Type the password and press Enter. If you've set up SSH key authentication, you won't need to enter a password.

5. The file will be transferred from your local computer to the remote server. You'll see a progress bar indicating the transfer status.

6. Once the transfer is complete, you'll see the command prompt again.

Note: If you want to transfer a file from the remote server to your local computer, you can use the same `scp` command, but reverse the source and destination paths.
