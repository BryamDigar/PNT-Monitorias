package unisabana.edu.plataformaTutorias.Monitores;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import unisabana.edu.plataformaTutorias.Monitorias.MonitoriasController;
import unisabana.edu.plataformaTutorias.Respuesta;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/monitores")
public class MonitorController {

    public List<MonitorDTO> monitorList;

    public MonitorController() {
        this.monitorList = new ArrayList<>();
        monitorList.add(new MonitorDTO(100000,"Daniel", 3, facultadEnum.INGENIERIA,"Informatica, colaboración y liderazgo, logica"));
        monitorList.add(new MonitorDTO( 100002,"Samuel", 5, facultadEnum.COMUNICACION,"Comunicacion, iniciativa, redaccion"));
        monitorList.add(new MonitorDTO( 100003,"Andrea", 4, facultadEnum.DERECHO, "Leyes, educador, pensamiento crítico"));
        monitorList.add(new MonitorDTO( 100004,"Fulana", 3, facultadEnum.INGENIERIA,"Bioproduccion, integridad,  comunicación efectiva"));
        monitorList.add(new MonitorDTO( 100005,"Jaime", 3, facultadEnum.INGENIERIA,"Informatica, creatividad, trabajo en equipo"));
    }

    @PostMapping(path = "/crear")
    public Respuesta crearMonitor(@RequestBody @Valid MonitorDTO monitor){
        monitor.setId(filtrarID());
        monitorList.add(monitor);
        return new Respuesta("Monitor ingresado correctamente");
    }

    @GetMapping(path = "/todos")
    public List<MonitorDTO> obtenerMonitor() {
        return monitorList;
    }

    @GetMapping(path = "")
    public List<MonitorDTO> obtenerMonitorPorFacultad(@RequestParam facultadEnum facultad){
        List<MonitorDTO> busqueda = new ArrayList<>();
        for(MonitorDTO monitor : monitorList){
            if(monitor.getFacultad().equals(facultad)){
                busqueda.add(monitor);
            }
        }
        return busqueda;
    }
    @GetMapping(path = "/buscarid")
    public List<MonitorDTO> obtenerMonitorPorId(@RequestParam int id){
        List<MonitorDTO> busqueda = new ArrayList<>();
        for(MonitorDTO monitor : monitorList){
            if(monitor.getId() == id){
                busqueda.add(monitor);
            }
        }
        return busqueda;
    }

    @DeleteMapping(path = "/eliminar/{id}")
    public Respuesta eliminarMonitor(@PathVariable(name = "id") Integer id){
        int index = 0;
        for(MonitorDTO monitorElim : monitorList){
            if(monitorElim.getId() == id){
                monitorList.remove(index);
                break;
            }
            index++;
        }
        return new Respuesta("Monitor eliminado");
    }

    @PutMapping(path = "/actualizar/{id}")
    public Respuesta actualizarMonitor(@PathVariable Integer id,@RequestBody @Valid MonitorDTO actualizarMonitor){
        for (MonitorDTO monitor : monitorList){
            if (monitor.getId() == id){
                actualizarMonitor.setId(id);
                int posicion = monitorList.indexOf(monitor);
                monitorList.set(posicion,actualizarMonitor);
                break;
            }
        }
        return new Respuesta("Monitor actualizado correctamente");
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

    public boolean verificarMonitor(int idMonitor){
        boolean existencia = false;
        for (MonitorDTO monitor : monitorList){
            if(monitor.getId() == idMonitor){
                existencia = true;
                break;
            }
        }
        return existencia;
    }

}
