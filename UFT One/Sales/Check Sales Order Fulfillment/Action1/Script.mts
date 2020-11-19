Browser("Manage Sales Orders").Page("Manage Sales Orders").WebList("Group Navigation").Select "Sales" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebButton("Manage Sales Orders").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebEdit("Sales Order").Set "63069"
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Go (Search)").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Select Order").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Set Delivery Block").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Delivery Block").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Check Shipping Data").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("OK").Click
OptionalStep.Browser("Manage Sales Orders").Page("Manage Sales Orders").WebElement("Close").Click
Browser("Manage Sales Orders").Page("Manage Sales Orders").Image("Home").Click

