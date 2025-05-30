using backend_api.DTOs;
using backend_api.Models;

namespace backend_api.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> UserExistsAsync(string email);
        Task<User> RegisterAsync(RegisterDTO dto);
        Task<User> LoginAsync(LoginDTO dto);
    }
}
