SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
Browser("SAP Trial: Log On").Navigate Parameter("URL")
Browser("SAP Trial: Log On").Page("SAP Trial: Log On").WebEdit("Username").Set Parameter("User") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("SAP Trial: Log On").Page("SAP Trial: Log On").WebEdit("Password").SetSecure Parameter("Password")
Browser("SAP Trial: Log On").Page("SAP Trial: Log On").WebButton("Log On").Click
