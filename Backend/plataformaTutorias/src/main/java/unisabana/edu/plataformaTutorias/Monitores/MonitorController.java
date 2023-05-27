package unisabana.edu.plataformaTutorias.Monitores;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/monitores")
public class MonitorController {

    List<MonitorDTO> monitorList;

    public MonitorController() {
        this.monitorList = new ArrayList<>();
        monitorList.add(new MonitorDTO(100000,"Daniel", 3, "INGENIERIA","Informatica"));
        monitorList.add(new MonitorDTO( 100002,"Samuel", 5, "COMUNICACION","Comunicacion"));
        monitorList.add(new MonitorDTO( 100003,"Andrea", 4, "DERECHO", "EICEA"));
        monitorList.add(new MonitorDTO( 100004,"Fulana", 3, "INGENIERIA","Bioproduccion"));
        monitorList.add(new MonitorDTO( 100005,"Jaime", 3, "INGENIERIA","Informatica"));
    }

    @PostMapping(path = "/crear")
    public String crearMonitor(@RequestBody @Valid MonitorDTO monitor){
        monitor.setId(filtrarID());
        monitorList.add(monitor);
        return "Estudiante ingresado correctamente";
    }

    @GetMapping(path = "/todos")
    public List<MonitorDTO> obtenerMonitor() {
        return monitorList;
    }

    @GetMapping(path = "")
    public List<MonitorDTO> obtenerMonitorPorFacultad(@RequestParam String facultad){
        List<MonitorDTO> busqueda = new ArrayList<>();
        for(MonitorDTO monitor : monitorList){
            if(monitor.getFacultad().equals(facultad)){
                busqueda.add(monitor);
            }
        }
        return busqueda;
    }





    public int filtrarID() {
        int id = 100000;
        for (MonitorDTO monitor : monitorList) {
            if (monitor.getId() > id) {
                id = monitor.getId();
            }
        }
        return id + 1;
    }
}
