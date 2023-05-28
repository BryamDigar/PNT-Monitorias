package unisabana.edu.plataformaTutorias.Monitorias;
import jakarta.validation.constraints.*;
import java.util.Objects;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MonitoriasDTO {

    private int idMonitoria;

    @NotNull(message = "El semestre completo es necesario")
    private int idMonitor;

    @NotNull(message= "Es necesaria una de las materias")
    private MateriasEnum materia;

    @NotNull(message = "La fecha completa es necesaria")
    @NotEmpty(message = "La fecha completa es necesaria")
    private String fecha;

    @NotNull(message = "La hora completa es necesaria")
    @NotEmpty(message = "La hora completa es necesaria")
    private String hora;

}
