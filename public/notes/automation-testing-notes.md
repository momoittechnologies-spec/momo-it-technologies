# MOMO Academy — Automation Testing & SDET Engineering Handbook (2026 Edition)
**Author:** MOMO IT Technologies Engineering Team  
**Headquarters:** 4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005  
**Official Website:** [https://momoittechnologies.com](https://momoittechnologies.com)  
**Contact / Admissions Desk:** +91 86398 31132 | momoit.technologies@gmail.com  

---

## 🌟 Welcome from MOMO IT Technologies
Welcome to the official study notes of **MOMO Academy**, the training division of **MOMO IT Technologies**. Unlike traditional academic institutions that teach obsolete theory, our handbooks are written directly by senior software engineers and test automation architects who build real commercial client products daily.

> ### 📢 The MOMO Student Ambassador Advantage
> As a student of MOMO Academy, you are our greatest brand ambassador. When learning with us, you see first-hand how enterprise test frameworks and full-stack software are built.  
> **Know a business owner, startup, hospital, school, or retail shop that needs custom software, a web application, mobile app, or QA testing?**  
> Connect them with **MOMO Tech Services**. When your referral becomes a client, you earn **up to 10% cash referral commission** and gain real-world shadowing experience on that live project!

---

## Module 1: Software QA & Testing Fundamentals

### 1.1 Software Development Life Cycle (SDLC) vs STLC
* **SDLC (Software Development Life Cycle):** The overarching process of planning, designing, coding, testing, deploying, and maintaining software.
* **STLC (Software Testing Life Cycle):** The specific phase focusing exclusively on quality verification:
  1. *Requirement Analysis* (identifying testable requirements)
  2. *Test Planning* (defining scope, resources, schedule)
  3. *Test Case Development* (writing step-by-step test scripts)
  4. *Test Environment Setup* (configuring browsers, servers, DBs)
  5. *Test Execution* (running manual & automated test runs)
  6. *Defect Reporting & Closure* (logging bugs in Jira, verifying fixes)

### 1.2 Black-Box Test Design Techniques
In technical interviews (TCS, Infosys, Cognizant, Wipro), interviewers frequently test your design precision:
1. **Boundary Value Analysis (BVA):**
   * *Rule:* Defects cluster around boundary edges.
   * *Example:* An age field accepts values from 18 to 60.
   * *Test values:* 17 (Min-1), 18 (Min), 19 (Min+1), 59 (Max-1), 60 (Max), 61 (Max+1).
2. **Equivalence Class Partitioning (ECP):**
   * Divide input domain into valid and invalid partitions.
   * Testing one representative value from each partition tests the entire partition.

### 1.3 Jira & Defect Life Cycle
* **Defect Severity:** Impact on the application (Critical, Major, Minor).
* **Defect Priority:** Urgency of the business fix (P1, P2, P3).
* *Classic Interview Question:* "Give an example of High Severity but Low Priority."
  * *Answer:* The company logo on the homepage causes the entire server to crash when clicked, but it is an internal admin page only accessed once a year.
* *Example of High Priority but Low Severity:* The company's name or logo is misspelled on the public homepage.

---

## Module 2: Core Java for Automation Architects

### 2.1 The 4 Pillars of OOPs in Automation
| Pillar | Definition in Simple English | How It Is Used in Selenium Automation |
| :--- | :--- | :--- |
| **Encapsulation** | Wrapping data (variables) and methods together; keeping fields private. | In **Page Object Model (POM)**, web elements (`@FindBy` or `By`) are kept `private`, and public action methods are exposed. |
| **Inheritance** | Child class acquiring properties and behaviors of a parent class. | `TestBase` parent class contains driver initialization; all test classes inherit from `TestBase`. |
| **Polymorphism** | One interface, multiple forms (Compile-time Overloading vs Runtime Overriding). | *Overloading:* `driver.switchTo().frame(int)` vs `frame(String)` vs `frame(WebElement)`.<br>*Overriding:* `WebDriver` interface implemented by `ChromeDriver` and `FirefoxDriver`. |
| **Abstraction** | Hiding internal implementation details and showing only essential features. | `WebDriver driver = new ChromeDriver();` (`WebDriver` is an interface). |

### 2.2 Collections Framework Cheat Sheet
* **List (ArrayList / LinkedList):** Ordered, allows duplicate elements. Used in Selenium: `List<WebElement> options = driver.findElements(By.xpath("//a"));`
* **Set (HashSet / LinkedHashSet):** Unordered, does NOT allow duplicate elements. Used in Selenium: `Set<String> windowHandles = driver.getWindowHandles();` (Switching browser tabs).
* **Map (HashMap):** Key-Value pairs. Essential for Data-Driven Testing (reading Excel or JSON test data into a `Map<String, String>`).

---

## Module 3: Selenium WebDriver 4 Deep Dive

### 3.1 WebDriver 4 Architecture
Selenium 4 completely eliminated the JSON Wire Protocol. WebDriver now communicates directly with browser drivers (Chromedriver, Geckodriver) using the **W3C Standard WebDriver Protocol**. This eliminates latency and browser flakiness.

### 3.2 Robust Locators & XPath Strategies
Never rely on fragile auto-generated dynamic IDs like `id="u_0_b_7x"`. Use resilient XPath strategies:
```xpath
// 1. Text-based locator
//button[text()='Submit Order']

// 2. Contains attribute
//input[contains(@placeholder, 'Enter mobile number')]

// 3. Normalized space (handles erratic whitespaces)
//button[normalize-space()='Login']

// 4. Parent/Child & Following-Sibling Axis
//label[text()='Email']/following-sibling::input
```

### 3.3 Explicit Waits vs Implicit Waits
> ⚠️ **Golden Rule of MOMO Automation:** Never mix Implicit Wait with Explicit Wait! It causes unpredictable timeouts.
```java
// Recommended: Explicit Wait with Duration (Selenium 4)
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement loginBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("submit-btn")));
loginBtn.click();
```

---

## Module 4: Page Object Model (POM) & TestNG Framework Design

### 4.1 Production Folder Structure
A professional enterprise framework built by MOMO IT Technologies looks like:
```text
src/test/java
 ├── com.momo.base
 │    └── BaseTest.java             // Driver setup, teardown, config loading
 ├── com.momo.pages
 │    ├── LoginPage.java            // Private locators + public action methods
 │    └── CheckoutPage.java
 ├── com.momo.tests
 │    ├── LoginTest.java            // TestNG assertions, zero raw driver calls
 │    └── OrderPlacementTest.java
 └── com.momo.utils
      ├── ConfigReader.java         // Reads config.properties
      ├── ExcelUtil.java            // Apache POI test data provider
      └── ExtentReportManager.java  // HTML test execution reports with screenshots
```

### 4.2 Sample Clean Page Object
```java
public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    // 1. Private Locators
    private By phoneInput = By.xpath("//input[@placeholder='98765 43210']");
    private By submitBtn = By.xpath("//button[contains(., 'Continue')]");

    // 2. Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    // 3. Public Action Methods
    public void enterPhoneNumber(String phone) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(phoneInput)).sendKeys(phone);
    }

    public void clickContinue() {
        wait.until(ExpectedConditions.elementToBeClickable(submitBtn)).click();
    }
}
```

---

## Module 5: Cucumber BDD (Behavior Driven Development)

### 5.1 Gherkin Feature File (`order.feature`)
```gherkin
Feature: Order Placement on FoodTech Portal

  Scenario Outline: Successful food ordering with valid phone
    Given the user navigates to "https://vijayasfood.in"
    When the user selects item "<item_name>" and proceeds to checkout
    And enters WhatsApp number "<phone>"
    Then the order confirmation screen should display "<status>"

    Examples:
      | item_name          | phone      | status    |
      | Hyderabadi Biryani | 9876543210 | Confirmed |
```

---

## Module 6: REST Assured API Automation

### 6.1 BDD Syntax: Given-When-Then
```java
@Test
public void verifyUserCreationAPI() {
    RestAssured.baseURI = "https://api.momoittechnologies.com";

    given()
        .header("Content-Type", "application/json")
        .body("{\"name\":\"Mohan\", \"role\":\"SDET\"}")
    .when()
        .post("/v1/students")
    .then()
        .statusCode(201)
        .body("status", equalTo("SUCCESS"))
        .body("data.role", equalTo("SDET"))
        .time(lessThan(1500L));
}
```

---

## Module 7: CI/CD Pipeline (Maven & GitHub Actions)

### 7.1 Running Headless in CI/CD (`pom.xml` & `maven-surefire-plugin`)
```bash
# Command line execution with custom browser and environment
mvn clean test -Dbrowser=chrome -Dheadless=true -Denvironment=staging
```

### 7.2 Sample GitHub Actions Workflow (`.github/workflows/test.yml`)
```yaml
name: Automation Regression Suite
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 21
        uses: actions/setup-java@v3
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Run Maven Tests
        run: mvn clean test
```

---

## Module 8: Top 10 MNC Interview Questions & Answers

1. **Q: What is the difference between `driver.close()` and `driver.quit()`?**  
   *A:* `driver.close()` closes the current focused browser window. `driver.quit()` terminates all open browser sessions and kills the background driver process.
2. **Q: How do you handle StaleElementReferenceException?**  
   *A:* It occurs when the DOM refreshed or element re-rendered after being located. Fix: Re-initialize the element inside a retry loop or use `ExpectedConditions.refreshed(...)`.
3. **Q: Why is Page Object Model (POM) preferred over linear test scripts?**  
   *A:* High reusability, reduced code redundancy, and single point of maintenance when UI locators change.
4. **Q: How do you handle dynamic Web Tables in Selenium?**  
   *A:* By identifying row count (`//table//tr`) and iterating cells via dynamic indexed XPath: `//table//tr[" + i + "]//td[" + j + "]`.
5. **Q: How do you pass authentication tokens across API test steps in RestAssured?**  
   *A:* Extract the token using `response.jsonPath().getString("token")` in a `@BeforeClass` setup method and pass it as `Authorization: Bearer <token>` in subsequent requests.

---

## Module 9: Freelancing Blueprint for QA Engineers
* **Services you can sell on Upwork / Fiverr / Local Clients:**
  1. Automated Regression Suite Setup (Charge: $300 – $800 per web app).
  2. Load & Stress Testing using JMeter (Charge: $200 – $500).
  3. API Security & Functional Validation.
* **Pro-Tip:** Always deliver an ExtentReport or Allure HTML report with screenshots. Clients love executive dashboards!

---

## 💼 MOMO Tech Services — Client Referral Partnership
As a student or graduate of MOMO Academy:
* If you find a client who needs a custom **Web Application, SaaS Product, FoodTech PWA, or Flutter Mobile App**, introduce them to our leadership.
* **MOMO IT Technologies** handles the proposal, architecture, coding, and deployment.
* You receive **10% of the project contract value** as a direct referral partner!
* Contact: **+91 86398 31132** | **momoit.technologies@gmail.com**
