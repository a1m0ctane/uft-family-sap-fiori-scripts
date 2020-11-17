Browser("Home").Page("Home").WebElement("Profile").Click
Browser("Home").Page("Home").WebElement("Sign Out").Click
If Browser("Home").Page("Home").WebElement("Confirm OK").Exist(20) Then
	Browser("Home").Page("Home").WebElement("Confirm OK").Click
End If
Browser("Home").ClearCache
Browser("Home").close
