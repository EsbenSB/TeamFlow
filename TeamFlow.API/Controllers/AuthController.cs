using Microsoft.AspNetCore.Mvc;
using TeamFlow.Application.DTOs;
using TeamFlow.Application.Interfaces;

namespace TeamFlow.API.Controllers;

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
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var token = await _authService.Register(request.Email, request.Password);
        return Ok(new { token });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var token = await _authService.Login(request.Email, request.Password);

        if (token == null)
            return Unauthorized();

        return Ok(new { token });
    }
}