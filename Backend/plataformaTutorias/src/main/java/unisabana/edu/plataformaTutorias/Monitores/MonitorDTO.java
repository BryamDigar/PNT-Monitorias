package unisabana.edu.plataformaTutorias.Monitores;
import jakarta.validation.constraints.*;
import java.util.Objects;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MonitorDTO {

    private int id;

    @NotNull(message = "El nombre completo es necesario")
    @NotEmpty(message = "El nombre completo es necesario")
    @Size(min = 3)
    private String nombre;

    @NotNull(message = "El semestre completo es necesario")
    @Min(1)
    @Max(12)
    private int semestre;

    @NotNull(message = "La facultad completa es necesaria")
    private facultadEnum facultad;

    @NotNull(message = "Las habilidades completas son necesarias")
    @NotEmpty(message = "Las habilidades completas son necesarias")
    private String habilidades;

}
