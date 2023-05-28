package unisabana.edu.plataformaTutorias.Reservas;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import unisabana.edu.plataformaTutorias.Monitorias.MonitoriasController;
import unisabana.edu.plataformaTutorias.Monitorias.MonitoriasDTO;
import unisabana.edu.plataformaTutorias.Respuesta;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/reservas")
public class ReservasController {

    List<ReservasDTO> reservasList;

    public ReservasController(){
        this.reservasList = new ArrayList<>();
        reservasList.add(new ReservasDTO(500000,100000,MateriasEnum.CALCULO,"2023-06-19","14:00"));
        reservasList.add(new ReservasDTO(500001,100005,MateriasEnum.PROGRAMACION,"2023-07-02","8:30"));
        reservasList.add(new ReservasDTO(500002,100000,MateriasEnum.CALCULO,"2023-06-19","14:00"));
        reservasList.add(new ReservasDTO(500003,100000,MateriasEnum.CALCULO,"2023-06-19","14:00"));
        reservasList.add(new ReservasDTO(500004,100000,MateriasEnum.CALCULO,"2023-06-19","14:00"));
    }

    @PostMapping(path = "/crear")
    public Respuesta crearReserva (@RequestBody @Valid ReservasDTO reserva){
        String estado;
        if (verificarExistenciaMonitoria(reserva.getIdMonitoria())){
            reservasList.add(reserva);
            estado = "La reserva se ha hecho exitosamente, recuerde calificar en la pestaña de reservas";
        }else {
            estado = "No se pudo hacer la reserva";
        }
        return new Respuesta(estado);
    }

    @GetMapping(path = "/todos")
    public List<ReservasDTO> obtenerReservas() {return reservasList;}

    @GetMapping(path = "")
    public List<ReservasDTO> obtenerReservasPorID(@RequestParam int idMonitoria){
        List<ReservasDTO> busqueda= new ArrayList<>();
        for (ReservasDTO reserva : reservasList){
            if(reserva.getIdMonitoria() == idMonitoria){
                busqueda.add(reserva);
            }
        }
        return busqueda;
    }

    @DeleteMapping(path = "/cancelar/{idMonitoria}")
    public Respuesta cancelarReserva(@PathVariable(name = "idMonitoria") Integer idMonitoria){
        int index = 0;
        for(ReservasDTO reserva : reservasList){
            if (reserva.getIdMonitoria() == idMonitoria){
                reservasList.remove(index);
                break;
            }
            index++;
        }
        return new Respuesta("La monitoria a sido cancelada");
    }

    @DeleteMapping(path = "/calificar/{idMonitoria}")
    public Respuesta calificarReserva(@PathVariable(name = "idMonitoria") Integer idMonitoria){
        int index = 0;
        for(ReservasDTO reserva : reservasList){
            if (reserva.getIdMonitoria() == idMonitoria){
                reservasList.remove(index);
                break;
            }
            index++;
        }
        return new Respuesta("La monitoria a sido calificada");
    }


    public boolean verificarExistenciaMonitoria(int idMonitoria){
        MonitoriasController monitoria = new MonitoriasController();
        return monitoria.verificarMonitoria(idMonitoria);
    }
}
