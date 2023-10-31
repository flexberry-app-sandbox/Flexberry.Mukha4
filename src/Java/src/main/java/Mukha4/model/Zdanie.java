package Mukha4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Mukha4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Здание
 */
@Entity(name = "IISMukha4Здание")
@Table(schema = "public", name = "Здание")
public class Zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "ГородID")
    private Integer городid;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gorod")
    @Convert("Gorod")
    @Column(name = "Город", length = 16, unique = true, nullable = false)
    private UUID _gorodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gorod", insertable = false, updatable = false)
    private Gorod gorod;


    public Zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public Integer getГородID() {
      return городid;
    }

    public void setГородID(Integer городid) {
      this.городid = городid;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }


}