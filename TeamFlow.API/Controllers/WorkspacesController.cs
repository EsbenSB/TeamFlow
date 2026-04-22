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
public class WorkspacesController : ControllerBase
{
    private readonly AppDbContext _context;

    public WorkspacesController(AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        var workspaces = await _context.Workspaces
            .Where(w => w.OwnerId == Guid.Parse(userId!))
            .Select(w => new WorkspaceDto
            {
                Id = w.Id,
                Name = w.Name
            })
            .ToListAsync();

        return Ok(workspaces);
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Create(Workspace workspace)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId == null)
            return Unauthorized();

        workspace.Id = Guid.NewGuid();
        workspace.OwnerId = Guid.Parse(userId);

        _context.Workspaces.Add(workspace);
        await _context.SaveChangesAsync();

        return Ok(new WorkspaceDto
        {
            Id = workspace.Id,
            Name = workspace.Name
        });
    }
}