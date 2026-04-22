namespace TeamFlow.Domain.Entities;

public class Board
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;

    public Guid WorkspaceId { get; set; }
    public Workspace? Workspace { get; set; }

    public List<TaskItem> Tasks { get; set; } = new();
}