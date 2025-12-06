using UnityEngine;

public class GlitchHunterController : MonoBehaviour {
    [Header("Movement Settings")]
    public float moveSpeed = 8f;
    public float dashDistance = 5f;
    public LayerMask dashLayer;

    private Rigidbody2D rb;
    private Vector2 moveInput;

    void Start() {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update() {
        // Standard Movement
        float x = Input.GetAxisRaw("Horizontal");
        float y = Input.GetAxisRaw("Vertical");
        moveInput = new Vector2(x, y).normalized;

        // Glitch Dash Mechanic
        if (Input.GetKeyDown(KeyCode.Space)) {
            PerformGlitchDash();
        }
    }

    void FixedUpdate() {
        rb.velocity = moveInput * moveSpeed;
    }

    void PerformGlitchDash() {
        // Teleport logic with wall check
        Vector2 targetPos = rb.position + moveInput * dashDistance;
        if (!Physics2D.OverlapCircle(targetPos, 0.5f, dashLayer)) {
            rb.MovePosition(targetPos);
            AudioManager.Play("Dash_Glitch_SFX");
        }
    }
}
