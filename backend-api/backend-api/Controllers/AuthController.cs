using backend_api.DTOs;
using backend_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO dto)
        {
            if (await _authService.UserExistsAsync(dto.Email))
                return BadRequest("User already exists");

            var user = await _authService.RegisterAsync(dto);
            return Ok(new { user.Id, user.Email });
        }
    }

}
