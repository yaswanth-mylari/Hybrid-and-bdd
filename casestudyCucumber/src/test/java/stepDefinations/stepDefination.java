package stepDefinations;

import java.util.List;

import org.apache.logging.log4j.LogManager;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageLocaters.bedRoom;
import pageLocaters.decor;
import pageLocaters.delivery;
import pageLocaters.furniture;
import pageLocaters.help;
import pageLocaters.login;
import pageLocaters.matress;
import pageLocaters.sale;
import pageLocaters.signup;
import pageLocaters.store;
import resources.base;
//@RunWith(Cucumber.class)
public class stepDefination extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	public WebDriver driver=null;
	public WebElement ele=null;
	
	@Given("^inititalise the (.+) browser$")
    public void inititalise_the_browser(String browser) throws Throwable {
        driver=initializeDriver();
		
    }

    @When("^user is on \"([^\"]*)\" site$")
    public void user_is_on_something_site(String strArg1) throws Throwable {
        driver.get(strArg1);
        Actions a=new Actions(driver);
    }
    @Then("^close the popup$")
    public void close_the_popup() throws Throwable {
        //throw new PendingException();
    	base.closePopup();
    }
    //Check if Dreamlite matress is present
    @Then("^click on matress by range$")
    public void click_on_matress_by_range() throws Throwable {
    	matress m=new matress(driver);
		Actions a=new Actions(driver);
		a.moveToElement(m.goToMatress()).build().perform();
		ele=m.goToMatressByRange();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on matress by range");
    }
    @Then("^check if \"([^\"]*)\" is present$")
    public void check_if_is_present(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    	matress m=new matress(driver);
    	System.out.println(m.getHeading().getText());
    	Assert.assertEquals(m.getHeading().getText(), arg1);
		log.info("Dreamlite Matress is present");
    }
    
    //Decor mirror price
    @Then("^click on wall mirrors$")
    public void click_on_wall_mirrors() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
    	decor d=new decor(driver);
		Actions a=new Actions(driver);
		a.moveToElement(d.goToDecor()).build().perform();
		ele=d.goToWallMirrors();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on wall mirrors in decor");
    }

    @Then("^click on instock only$")
    public void click_on_instock_only() throws Throwable {
    	decor d=new decor(driver);
    	d.clickInStock().click();
		log.info("selected instock products");
		Thread.sleep(3000);
    }

    @Then("^print first mirror name and cost$")
    public void print_first_mirror_name_and_cost() throws Throwable {
    	decor d=new decor(driver);
    	String mirror=d.getMirrorname().getText();
		String cost=d.getMirrorcost().getText();
		log.info("got first mirror name and cost");
		System.out.println("Mirror type: "+mirror+" ,cost= "+cost.substring(1));
    }
    
    //set prices for king size beds
    @Then("^click on  kingsize beds$")
    public void click_on_kingsize_beds() throws Throwable {
       // throw new PendingException();
    	bedRoom br=new bedRoom(driver);
		Actions a=new Actions(driver);
		a.moveToElement(br.goToBeds()).build().perform();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		ele=br.goToKingSize();
		jse.executeScript("arguments[0].click()", ele);
		log.info("redirected to king size beds");
    	
    }

    @Then("^Set any price limit to filter products$")
    public void set_any_price_limit_to_filter_products() throws Throwable {
        //throw new PendingException();
    	bedRoom br=new bedRoom(driver);
    	Actions a=new Actions(driver);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
    	a.moveToElement(br.goToPrice()).build().perform();
		ele=br.setPrice();
		jse.executeScript("arguments[0].click()", ele);
		log.info("set price limit succesfully");
    }
    
    //get sofa set dimensions
    @Then("^click on wodden sofa sets under sale$")
    public void click_on_wodden_sofa_sets_under_sale() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		sale s=new sale(driver);
		Actions a=new Actions(driver);
		a.moveToElement(s.goToSales()).build().perform();
		ele=s.goToSofa();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on sales");
        
    }

    @Then("^view malabar sofaset product$")
    public void view_malabar_sofaset_product() throws Throwable {
        //throw new PendingException();\
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		sale s=new sale(driver);
		Actions a=new Actions(driver);
    	ele=s.goToViewProduct();
		jse.executeScript("arguments[0].click()", ele); 
		log.info("clicked on view product");
    }

    @Then("^get 3 seater dimensions in description$")
    public void get_3_seater_dimensions_in_description() throws Throwable {
       // throw new PendingException();
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		sale s=new sale(driver);
		Actions a=new Actions(driver);
    	driver.get("https://www.urbanladder.com/products/malabar-wooden-sofa-macadamia-brown?src=listing-wooden-sofas");
		String dimensions=s.getDimensions().getText();
		System.out.println("3seater dimensions: "+dimensions);
		Assert.assertEquals("813.0 mm x 2121.0 mm x 889.0 mm", dimensions);
		log.info("got dimensions");
    }
    
    //check"sourcing@urbanladder.com" is present in contact us page
    @Then("^click on help button$")
    public void click_on_help_button() throws Throwable {
JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		help h=new help(driver);
		h.goToHelp().click();
		log.info("clicked on help button");
    }

    @Then("^go to contact us page$")
    public void go_to_contact_us_page() throws Throwable {
    	help h=new help(driver);
    	h.goToContactus().click();
    }

    @Then("^verify if \"([^\"]*)\" is present$")
    public void verify_if_something_is_present(String strArg1) throws Throwable {
    	help h=new help(driver);
    	String contactemail=h.getMail().getText();
		log.info("got contact email");
		System.out.println("contactemail: "+contactemail);
		Assert.assertEquals(strArg1, contactemail);
    }
    
    //Get JP nagar address
    @Then("^click on store$")
    public void click_on_store() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		store s=new store(driver);
		s.goToStore().click();
		log.info("clicked in store");
    }

    @Then("^click on JPnagar card$")
    public void click_on_jpnagar_card() throws Throwable {
    	store s=new store(driver);
    	s.goToViewDetails().click();
    }

    @Then("^get the address$")
    public void get_the_address() throws Throwable {
    	store s=new store(driver);
    	System.out.println(s.getAddress().getText());
		log.info("got Jpnagar Store address");
		Assert.assertEquals("#565, 9th Cross Road, 7th Main, Sarakki, 3rd Phase, J. P. Nagar", s.getAddress().getText());
    } 
    
    //signup details
    
    @Then("^click on Profile button$")
    public void click_on_profile_button() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		signup s=new signup(driver);
		Actions a=new Actions(driver);
		a.moveToElement(s.goToProfile()).build().perform();
    }
    @Then("^enter the Signup details$")
    public void enter_the_signup_details() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		signup s=new signup(driver);
		new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.cssSelector("*[data-gaaction=\"popup.auth.close\"]") ));
		List<WebElement> elem = s.email();
		ele=elem.get(0);
		jse.executeScript("arguments[0].setAttribute('value', 'abc@gamil.com')", ele);
		log.info("entered mailid");
		elem = s.password();
		ele=elem.get(1);
		jse.executeScript("arguments[0].setAttribute('value', 'password')", ele);
		log.info("entered password");
		ele=s.SignupButton();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on signup ");
    }
    @Then("^click on signup$")
    public void click_on_signup() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		signup s=new signup(driver);
    	ele=s.goToSignup();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on signup button");
    }
    //.login
    @Then("^click on login$")
    public void click_on_login() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
    	login l=new login(driver);
    	ele=l.goTologin();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on login button");
    }

    @Then("^enter the login details$")
    public void enter_the_login_details() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
    	login l=new login(driver);
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
    
    //get all minimum prices of furniture
    @And("^click on all furniture$")
    public void click_on_all_furniture() throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
    	furniture f=new furniture(driver);
		ele=f.goToAllFurniture();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on allfurniture");
		Thread.sleep(2000);
    }
    @And("^click on study room tables$")
    public void click_on_study_room_tables() throws Throwable {
    	furniture f=new furniture(driver);
    	f.goToStudyRoom().click();
		log.info("clicked on study room tables");
    }
    @And("^get all minimum prices under popular categories$")
    public void get_all_minimum_prices_under_popular_categories() throws Throwable {
    	furniture f=new furniture(driver);
    	List<WebElement> price = f.getCategories();
		for (int i1 = 0; i1 < price.size(); i1++) {
			 if(i1!=3) {
			 System.out.print("Price: ");
	            base.getPrice(price.get(i1).getText());
	        }
		}
		log.info("got all category prices");
    }    
    
    //Check if guntur is present in AP
    @And("^click on more locations in delivery$")
    public void click_on_more_locations_in_delivery() throws Throwable {
JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		delivery de=new delivery(driver);
		ele=de.clickMorePlaces();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on the more locations");
		
    }

    @And("^check if \"([^\"]*)\" is present in locations$")
    public void check_if_something_is_present_in_locations(String strArg1) throws Throwable {
    	JavascriptExecutor jse = (JavascriptExecutor)driver;
		delivery de=new delivery(driver);
    	driver.get("https://www.urbanladder.com/locations?src=footer");
    	List<WebElement> cities = de.grabAllPlaces();
		int flag=0;
		for(int i=0;i<cities.size();i++) {
			if(cities.get(i).getText().equalsIgnoreCase(strArg1)) {
				flag=1;
				break;
			}
		}
		if(flag==1) {
			System.out.println("Guntur is present");
			Assert.assertTrue(true);
			log.info("Required place is present");
		}
		else {
			Assert.assertTrue(false);
		}
    }
}