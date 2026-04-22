using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using TeamFlow.Application.DTOs;
using TeamFlow.Domain.Entities;
using TeamFlow.Infrastructure.Data;

namespace TeamFlow.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BoardsController : ControllerBase
{
    private readonly AppDbContext _context;

    public BoardsController(AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpGet("{workspaceId}")]
    public async Task<IActionResult> Get(Guid workspaceId)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId == null)
            return Unauthorized();

        var boards = await _context.Boards
            .Where(b => b.WorkspaceId == workspaceId &&
                        b.Workspace!.OwnerId == Guid.Parse(userId))
            .Select(b => new BoardDto
            {
                Id = b.Id,
                Name = b.Name
            })
            .ToListAsync();

        return Ok(boards);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Board board)
    {
        board.Id = Guid.NewGuid();

        _context.Boards.Add(board);
        await _context.SaveChangesAsync();

        return Ok(new BoardDto
        {
            Id = board.Id,
            Name = board.Name
        });
    }
}