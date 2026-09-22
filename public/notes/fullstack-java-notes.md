# MOMO Academy — Full-Stack Software Engineering Handbook (2026 Edition)
**Author:** MOMO IT Technologies Engineering Team  
**Stack:** Java 21 LTS, Spring Boot 3, PostgreSQL, React 19 & Next.js 15  
**Headquarters:** 4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005  
**Official Website:** [https://momoittechnologies.com](https://momoittechnologies.com)  
**Contact / Admissions Desk:** +91 86398 31132 | momoit.technologies@gmail.com  

---

## 🌟 Welcome from MOMO IT Technologies
Welcome to **MOMO Academy's Full-Stack Software Engineering Handbook**. At MOMO IT Technologies, we build enterprise-grade SaaS products, custom business ERPs, and high-performance web applications for clients across India and globally.

This handbook is designed with one mission: **to transform you into a full-stack engineer who builds real, commercial software from scratch** — capable of cracking high-paying MNC product roles (CTC ₹6L – ₹18L+) or generating lucrative freelancing income (₹50k – ₹2L+ per project).

> ### 📢 The MOMO Student Ambassador & Client Referral Program
> As a student or alumnus of MOMO Academy, you are our trusted brand ambassador!  
> **Know a local business owner, startup founder, school, hospital, or enterprise needing custom software, a SaaS portal, web development, or cloud migration?**  
> Connect them with **MOMO Tech Services**. Our senior engineering team manages client pitching, requirement scoping, architecture, coding, and production deployment.  
> **You receive up to 10% cash commission** on the entire project contract value! Simply email **momoit.technologies@gmail.com** or WhatsApp **+91 86398 31132** with the client lead.

---

## Module 1: Modern Java 21 LTS Core for Enterprise

### 1.1 Java 21 Modern Features Every Enterprise Uses
Gone are the days of bloated, boilerplate Java 8 code. In Java 21, clean code is the standard:

1. **Records (Immutable Data Carriers):**
   ```java
   // Automatically creates constructor, getters, equals(), hashCode(), and toString()
   public record UserDTO(Long id, String name, String email, String role) {}
   ```
2. **Pattern Matching for `switch`:**
   ```java
   public static String formatPayment(Object payment) {
       return switch (payment) {
           case UpiPayment u    -> "UPI Transaction ID: " + u.getUpiId();
           case CardPayment c   -> "Credit Card Ending: " + c.getLastFourDigits();
           case CashPayment cp  -> "Cash Payment: ₹" + cp.getAmount();
           default              -> "Unknown Payment Type";
       };
   }
   ```
3. **Virtual Threads (Project Loom):**
   Traditional Java threads map 1:1 to OS kernel threads, consuming ~1MB memory per thread. Java 21 Virtual Threads are lightweight threads managed directly by the JVM (~few hundred bytes), allowing millions of concurrent HTTP requests without running out of memory:
   ```java
   // In Spring Boot 3.2+: enable via application.properties:
   // spring.threads.virtual.enabled=true
   ```

---

## Module 2: Spring Boot 3 & RESTful Microservices

### 2.1 Enterprise 3-Tier Architecture
MOMO IT Technologies strictly enforces clean separation of concerns:
```text
Client (Next.js 15)
       │ HTTP / JSON
       ▼
Controller Layer (@RestController)   --> Handles HTTP request/response & validation
       │
Service Layer (@Service)             --> Pure business logic & transaction handling
       │
Repository Layer (@Repository)       --> Spring Data JPA / Hibernate queries
       │
Database (PostgreSQL)
```

### 2.2 Production REST Controller with Validation & DTOs
```java
@RestController
@RequestMapping("/api/v1/projects")
@CrossOrigin(origins = "https://momoittechnologies.com")
public class ProjectController {

    private final ProjectService projectService;

    // Constructor injection (Best practice: avoids reflection overhead of @Autowired)
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProjectResponseDTO>> createProject(
            @Valid @RequestBody ProjectRequestDTO request) {
        ProjectResponseDTO saved = projectService.createProject(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Project created successfully", saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProjectResponseDTO>> getProjectById(
            @PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success("Found", projectService.findById(id)));
    }
}
```

### 2.3 Global Exception Handling (`@ControllerAdvice`)
Never expose raw database stack traces to the public API. Use a centralized exception handler:
```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponse(404, ex.getMessage(), LocalDateTime.now()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(err -> 
            errors.put(err.getField(), err.getDefaultMessage()));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}
```

---

## Module 3: Spring Security 6 & JWT Stateless Authentication

### 3.1 JWT Authentication Flow
1. User POSTs credentials (`/api/v1/auth/login`).
2. Server validates credentials against BCrypt hashed password in PostgreSQL.
3. Server generates signed HMAC-SHA256 JWT containing `subject` (email) and claims (`roles`).
4. Client stores JWT in secure HTTP-only Cookie or Bearer header for all subsequent API requests.
5. `JwtAuthenticationFilter` intercepts request, validates signature, and populates `SecurityContextHolder`.

### 3.2 SecurityFilterChain Configuration
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthFilter jwtAuthFilter) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/api/v1/public/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}
```

---

## Module 4: PostgreSQL Database Optimization & JPA

### 4.1 Solving the JPA N+1 Query Problem
> ⚠️ **Critical Interview Question:** If you fetch 100 orders with their associated customer via `@OneToMany`, default lazy loading executes 1 query for orders + 100 queries for customers (101 queries)!

**The Solution:** Use `JOIN FETCH` or `@EntityGraph`:
```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o JOIN FETCH o.customer WHERE o.status = :status")
    List<Order> findOrdersWithCustomerEagerly(@Param("status") OrderStatus status);
}
```

### 4.2 Database Indexing Best Practice
Always create composite indexes for query filters and sorting keys:
```sql
CREATE INDEX idx_orders_customer_date ON orders(customer_id, created_at DESC);
```

---

## Module 5: React 19 & Next.js 15 (Modern Frontend)

### 5.1 Server Components vs Client Components
* **React Server Components (RSC):** Render on the server, zero client JavaScript bundle size, direct access to backend data. Default in Next.js App Router.
* **Client Components (`'use client'`):** Needed only when using interactive hooks (`useState`, `useEffect`), event listeners (`onClick`), or browser APIs.

### 5.2 Clean Reusable Data Fetching with TypeScript
```tsx
// src/components/DashboardClient.tsx
'use client';

import { useState, useEffect } from 'react';

interface Project {
  id: number;
  name: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ON_HOLD';
  budget: number;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center text-slate-400">Loading live data...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((p) => (
        <div key={p.id} className="p-5 rounded-xl border border-slate-700 bg-slate-900/60 shadow-md">
          <h3 className="text-lg font-bold text-white">{p.name}</h3>
          <p className="text-sm text-cyan-400 mt-1">Status: {p.status}</p>
          <p className="text-sm text-slate-400 mt-1">Budget: ₹{p.budget.toLocaleString('en-IN')}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## Module 6: Docker Containerization & Cloud Deployment

### 6.1 Multi-Stage Dockerfile for Spring Boot 3
Keeps container sizes under 150MB instead of 800MB:
```dockerfile
# Stage 1: Build JAR
FROM eclipse-temurin:21-jdk-alpine AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Minimal JRE Runtime
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseZGC", "-jar", "app.jar"]
```

---

## Module 7: Top 10 MNC Full-Stack Interview Questions & Answers

1. **Q: What is the difference between Virtual Threads in Java 21 and Reactive Programming (Spring WebFlux)?**  
   *A:* Virtual threads allow writing imperative, synchronous, easy-to-debug code that scales to millions of threads with zero reactive overhead (`Mono`/`Flux`), making WebFlux largely unnecessary for typical microservice architectures.
2. **Q: How does Spring manage Transactions (`@Transactional`) under the hood?**  
   *A:* Spring uses CGLIB or Dynamic JDK Proxies to wrap your method in an AOP proxy. When called externally, the proxy intercepts execution, opens an entity transaction, commits on success, and rolls back if an unchecked `RuntimeException` is thrown.
3. **Q: Why should you avoid calling a `@Transactional` method from within the same class?**  
   *A:* Self-invocation bypasses the Spring proxy mechanism, meaning the transaction aspect is never triggered.
4. **Q: What is the difference between `PUT` and `PATCH` in REST API design?**  
   *A:* `PUT` replaces the entire resource representation (idempotent). `PATCH` applies partial modifications to the resource.
5. **Q: How does Next.js 15 handle Server Actions securely?**  
   *A:* Server Actions create encrypted POST endpoints under the hood, ensuring sensitive business logic and environment variables never leak to client JavaScript bundles.

---

## Module 8: Freelancing Blueprint for Full-Stack Developers
* **High-Demand Freelance Offerings:**
  1. **Custom Business Management Portals / CRM / Billing Software:**  
     Target: Retail chains, logistics companies, clinics. Price: ₹40,000 – ₹1,20,000 ($600 – $1,800).
  2. **Modern SaaS MVP Development for Founders:**  
     Build Next.js 15 frontend + Spring Boot backend + Stripe/Razorpay payment gateway + Auth. Price: ₹80,000 – ₹2,50,000 ($1,000 – $3,500).
  3. **Performance Optimization & Database Tuning:**  
     Fix slow SQL queries, add Redis caching. Price: ₹20,000 – ₹50,000.

---

## 💼 MOMO Tech Services — Client Referral Partnership
As an engineer trained at MOMO Academy:
* If you come across a company, client, or entrepreneur looking for enterprise-grade **SaaS Product Development, Microservices Architecture, Cloud Solutions, or ERP Software**, refer them to **MOMO IT Technologies**.
* **You receive 10% direct cash commission** upon contract signing.
* You get the opportunity to participate as an intern or junior engineer on the delivery team!
* Direct Referral Line: **+91 86398 31132** | **momoit.technologies@gmail.com**
