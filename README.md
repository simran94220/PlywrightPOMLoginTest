# PlywrightPOMLoginTest
automation framework with playwright(javascript)version where login function is performed in POM model. (vscode IDE)



Install using command as npm package
1. download node.js
2. verify versions from command prompt using node --version OR npm --version
3. download vscode from https://code.visualstudio.com/download
4. Create folder Playwright_Automation under any folder and open the same folder in vscode
5. open terminal using cntrl+space+j and hit below command in it: npm init playwright@latest  , choose typescript or javascript to be used
6. in terms of start recording steps use codegen utility  using command: npx playwright codegen
7. login to web site and enter user/pwd and click login , press record button to stop srecording
8. copy the code and paste in your js file under tests folder
9. execute for single browser in headed mode using command: npx playwright test --project=chromium --headed
<img width="81" height="265" alt="image" src="https://github.com/user-attachments/assets/eeae62aa-b5ca-4254-8000-0fc1876d5bd1" />


<img width="866" height="371" alt="image" src="https://github.com/user-attachments/assets/64a0339a-3c65-4364-a6b5-51cde135b2bc" />


Installing playwright using vscodeextenssion					Playwright Beginner Tutorial 2 | How to install
					
					
commands					
run test from tests folder			npx playwright test		
show report after tests			npx playwright show-report		
<img width="561" height="145" alt="image" src="https://github.com/user-attachments/assets/50a8cf8b-6616-408e-b8c0-6e82bd9fe3e9" />
