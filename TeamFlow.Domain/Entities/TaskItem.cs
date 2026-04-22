namespace TeamFlow.Domain.Entities;

public class TaskItem
{
    public Guid Id { get; set; }

    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    public string Status { get; set; } = "Todo";

    public Guid BoardId { get; set; }
    public Board? Board { get; set; }

    public Guid? AssignedUserId { get; set; }
    public User? AssignedUser { get; set; }
}