package unisabana.edu.plataformaTutorias.Monitorias;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import unisabana.edu.plataformaTutorias.Monitores.MonitorController;
import unisabana.edu.plataformaTutorias.Monitores.MonitorDTO;
import unisabana.edu.plataformaTutorias.Respuesta;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/monitorias")
public class MonitoriasController {

    List<MonitoriasDTO> monitoriasList;


    public MonitoriasController(){
        this.monitoriasList = new ArrayList<>();
        monitoriasList.add(new MonitoriasDTO(500000,100000,MateriasEnum.CALCULO,"2023-06-19","14:00"));
        monitoriasList.add(new MonitoriasDTO(500001,100003, MateriasEnum.JUICIO,"2023-07-01","9:00"));
        monitoriasList.add(new MonitoriasDTO(500002,100000,MateriasEnum.PROGRAMACION,"2023-06-20","10:00"));
        monitoriasList.add(new MonitoriasDTO(500003,100002,MateriasEnum.FOTOGRAFIA,"2023-06-08","16:00"));
        monitoriasList.add(new MonitoriasDTO(500004,100005,MateriasEnum.CALCULO,"2023-08-19","13:00"));
    }

    @PostMapping(path = "/crear")
    public Respuesta crearMonitoria(@RequestBody @Valid MonitoriasDTO monitoria){
        String estado;
        if(verificarExistenciaMonitor(monitoria.getIdMonitor())){
            monitoria.setIdMonitoria(filtrarIDMonitoria());
            monitoriasList.add(monitoria);
            estado = "Monitoria ingresada correctamente";
        }else {
            estado = "No se pudo ingresar la monitoria";
        }
        return new Respuesta(estado);
    }

    @GetMapping(path = "/todos")
    public List<MonitoriasDTO> obtenerMonitoria() {return monitoriasList;}

    @GetMapping(path = "")
    public List<MonitoriasDTO> obtenerMonitoriaPorMateria(@RequestParam MateriasEnum materia){
        List<MonitoriasDTO> busqueda= new ArrayList<>();
        for(MonitoriasDTO monitoria : monitoriasList){
            if (monitoria.getMateria().equals(materia)){
                busqueda.add(monitoria);
            }
        }
        return busqueda;
    }

    @DeleteMapping(path = "/eliminar/{idMonitoria}")
    public Respuesta eliminarMonitoria(@PathVariable(name = "idMonitoria") Integer idMonitoria){
        int index = 0;
        for(MonitoriasDTO monitoria : monitoriasList){
            if (monitoria.getIdMonitoria() == (idMonitoria)){
                monitoriasList.remove(index);
                break;
            }
            index++;
        }
        return new Respuesta("Monitoria eliminada");
    }

    @PutMapping(path = "/actualizar/{idMonitoria}")
    public Respuesta actualizarMonitoria(@PathVariable Integer idMonitoria, @RequestBody @Valid MonitoriasDTO actualizarMonitoria){
        String estado = null;
        if(verificarExistenciaMonitor(actualizarMonitoria.getIdMonitor())){
            for (MonitoriasDTO monitoria : monitoriasList){
                if (monitoria.getIdMonitoria() == idMonitoria){
                    actualizarMonitoria.setIdMonitoria(idMonitoria);
                    int posicion = monitoriasList.indexOf(monitoria);
                    monitoriasList.set(posicion,actualizarMonitoria);
                    estado = "Monitoria actualizada correctamente";
                    break;
                }
            }
        }else {
            estado = "La monitoria no pudo ser actualizada";
        }
        return new Respuesta(estado);
    }


    public int filtrarIDMonitoria() {
        int id = 100000;
        for (MonitoriasDTO monitoria : monitoriasList) {
            if (monitoria.getIdMonitoria() > id) {
                id = monitoria.getIdMonitoria();
            }
        }
        return id + 1;
    }

    public boolean verificarExistenciaMonitor(int id){
        MonitorController monitor = new MonitorController();
        return monitor.verificarMonitor(id);
    }


}
