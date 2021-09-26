package MavenProject.casestudy;

import java.io.IOException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import pageLocaters.login;
import resources.base;

public class loginInvalid extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void logindetails() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		login l=new login(driver);
		Actions a=new Actions(driver);
		a.moveToElement(l.goToProfile()).build().perform();
		ele=l.goTologin();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on login button");
		new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.cssSelector("*[data-gaaction=\"popup.auth.close\"]") ));
		List<WebElement> elem = l.email();
		ele=elem.get(1);
		jse.executeScript("arguments[0].setAttribute('value', 'abc@gamil.com')", ele);
		log.info("entered email");
		elem = l.password();
		ele=elem.get(2);
		jse.executeScript("arguments[0].setAttribute('value', 'password')", ele);
		log.info("entered password");
		ele=l.loginButton();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on login");
		
	}
}
