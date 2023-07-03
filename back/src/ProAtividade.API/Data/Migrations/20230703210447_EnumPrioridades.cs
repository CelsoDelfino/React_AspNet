using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProAtividade.API.Data.Migrations
{
    /// <inheritdoc />
    public partial class EnumPrioridades : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prioridade",
                table: "Atividades");

            migrationBuilder.AddColumn<int>(
                name: "PrioridadeEnum",
                table: "Atividades",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrioridadeEnum",
                table: "Atividades");

            migrationBuilder.AddColumn<string>(
                name: "Prioridade",
                table: "Atividades",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
