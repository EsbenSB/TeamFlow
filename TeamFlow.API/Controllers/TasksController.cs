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
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpGet("{boardId}")]
    public async Task<IActionResult> Get(Guid boardId)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId == null)
            return Unauthorized();

        var tasks = await _context.Tasks
            .Where(t => t.BoardId == boardId &&
                        t.Board!.Workspace!.OwnerId == Guid.Parse(userId))
            .Select(t => new TaskDto
            {
                Id = t.Id,
                Title = t.Title,
                Status = t.Status
            })
            .ToListAsync();

        return Ok(tasks);
    }

    [HttpPost]
    public async Task<IActionResult> Create(TaskItem task)
    {
        task.Id = Guid.NewGuid();

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        return Ok(new TaskDto
        {
            Id = task.Id,
            Title = task.Title,
            Status = task.Status
        });
    }
}